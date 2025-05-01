'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { useGetUmrahInfo } from '@/hooks/useGetUmrahInfo';
import Loader from '@/components/Loader';
import { ContentBlock, UmrahContent as UmrahContentType, UmrahSubmenu } from '@/types/umrah';
import { FaChevronDown, FaChevronUp, FaSuitcase, FaKaaba, FaHotel, FaBookOpen } from 'react-icons/fa';
import { renderBlock } from '@/utils/contentRenderer';

const UmrahContent: FC = () => {
  const { data, isLoading, error } = useGetUmrahInfo();
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [activeContent, setActiveContent] = useState<number | null>(null);
  const [expandedSubmenus, setExpandedSubmenus] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (data?.data && data.data.length > 0) {
      const firstMenu = data.data[0];
      setActiveMenu(firstMenu.id);

      if (firstMenu.submenus.length > 0) {
        const firstSubmenu = firstMenu.submenus[0];
        setActiveSubmenu(firstSubmenu.id);
        setExpandedSubmenus({ [firstSubmenu.id]: true });

        if (firstSubmenu.contents.length > 0) {
          setActiveContent(firstSubmenu.contents[0].id);
        }
      }
    }
  }, [data]);

  // Add a console log to verify mock data is being used
  useEffect(() => {
    if (data) {
      console.log('Umrah data loaded:', data);
    }
  }, [data]);

  // Toggle submenu expansion
  const toggleSubmenu = (submenuId: number) => {
    setExpandedSubmenus(prev => ({
      ...prev,
      [submenuId]: !prev[submenuId]
    }));
  };

  // Set active menu
  const handleMenuSelect = (menuId: number) => {
    setActiveMenu(menuId);

    // Find the first submenu of the selected menu
    const selectedMenu = data?.data.find(menu => menu.id === menuId);
    if (selectedMenu && selectedMenu.submenus.length > 0) {
      const firstSubmenu = selectedMenu.submenus[0];
      setActiveSubmenu(firstSubmenu.id);
      setExpandedSubmenus({ [firstSubmenu.id]: true });

      if (firstSubmenu.contents.length > 0) {
        setActiveContent(firstSubmenu.contents[0].id);
      }
    }
  };

  // Set active submenu
  const handleSubmenuSelect = (submenuId: number) => {
    setActiveSubmenu(submenuId);

    // Expand the selected submenu
    setExpandedSubmenus(prev => ({
      ...prev,
      [submenuId]: true
    }));

    // Find the first content of the selected submenu
    const activeMenuData = data?.data.find(menu => menu.id === activeMenu);
    const selectedSubmenu = activeMenuData?.submenus.find(submenu => submenu.id === submenuId);

    if (selectedSubmenu && selectedSubmenu.contents.length > 0) {
      setActiveContent(selectedSubmenu.contents[0].id);
    }
  };

  // Set active content
  const handleContentSelect = (contentId: number) => {
    setActiveContent(contentId);
  };

  // Get menu icon based on icon name
  const getMenuIcon = (iconName: string) => {
    switch (iconName) {
      case 'fa-solid fa-suitcase':
        return <FaSuitcase />;
      case 'fa-solid fa-kaaba':
        return <FaKaaba />;
      case 'fa-solid fa-hotel':
        return <FaHotel />;
      default:
        return <FaBookOpen />;
    }
  };

  // Get current content
  const getCurrentContent = (): UmrahContentType | null => {
    if (!data || !activeMenu || !activeSubmenu || !activeContent) return null;

    const menuData = data.data.find(menu => menu.id === activeMenu);
    if (!menuData) return null;

    const submenuData = menuData.submenus.find(submenu => submenu.id === activeSubmenu);
    if (!submenuData) return null;

    return submenuData.contents.find(content => content.id === activeContent) || null;
  };

  // Get active submenu data
  const getActiveSubmenuData = (): UmrahSubmenu | null => {
    if (!data || !activeMenu || !activeSubmenu) return null;

    const menuData = data.data.find(menu => menu.id === activeMenu);
    if (!menuData) return null;

    return menuData.submenus.find(submenu => submenu.id === activeSubmenu) || null;
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error || !data) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center min-h-[50vh]">
          <p className="text-red-500">Error loading Umrah information</p>
        </div>
      </div>
    );
  }

  const currentContent = getCurrentContent();
  const activeSubmenuData = getActiveSubmenuData();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Menu Navigation */}
      <div className="flex overflow-x-auto pb-4 gap-2 mb-8 scrollbar-hide">
        {data.data.map(menu => (
          <button
            key={menu.id}
            onClick={() => handleMenuSelect(menu.id)}
            className={`flex flex-col items-center justify-center px-6 py-3 whitespace-nowrap rounded-lg transition-all ${activeMenu === menu.id
              ? 'bg-[#FFC100] text-[#232323]'
              : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
          >
            <div className="text-xl mb-1">
              {getMenuIcon(menu.icon)}
            </div>
            <span className="font-medium">{menu.title}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left section - Submenu accordion */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-lg">
          {data.data
            .filter(menu => menu.id === activeMenu)
            .map(menu => (
              <div key={menu.id} className="space-y-3">
                {menu.submenus.map(submenu => (
                  <div
                    key={submenu.id}
                    className="mb-2 rounded-lg overflow-hidden shadow-sm bg-gray-50 transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleSubmenu(submenu.id)}
                      className={`w-full flex justify-between items-center p-4 rounded-t-lg ${activeSubmenu === submenu.id
                        ? 'bg-gray-100 text-gray-900 font-semibold'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      <span className="font-medium text-left">{submenu.title}</span>
                      <span className="text-gray-500 transition-transform duration-200 ml-2">
                        {expandedSubmenus[submenu.id] ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                      </span>
                    </button>

                    {expandedSubmenus[submenu.id] && (
                      <div className="px-2 py-3 bg-white rounded-b-lg">
                        {submenu.contents.map(content => (
                          <button
                            key={content.id}
                            onClick={() => {
                              handleSubmenuSelect(submenu.id);
                              handleContentSelect(content.id);
                            }}
                            className={`w-full text-left p-3 my-1 rounded-lg transition-all ${activeContent === content.id
                              ? 'bg-[#FFC100] text-[#232323] shadow-sm'
                              : 'text-gray-600 hover:bg-gray-50'
                              }`}
                          >
                            <div className="flex items-center">
                              <div className={`w-1.5 h-1.5 rounded-full mr-2 ${activeContent === content.id ? 'bg-[#232323]' : 'bg-gray-300'}`}></div>
                              <span>{content.title}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
        </div>

        {/* Right section - Content Display */}
        <div className="w-full md:w-2/3">
          {currentContent && (
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 abhaya-libre">
                {currentContent.title}
              </h2>

              {/* Cover Image */}
              <div className="w-full h-60 relative rounded-lg overflow-hidden mb-6 bg-gray-200">
                <Image
                  src={currentContent.coverImage.file.formats.large.url}
                  alt={currentContent.coverImage.alternativeText || currentContent.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose max-w-none">
                {currentContent.content.map((block, index) => renderBlock(block, index))}
              </div>
            </div>
          )}

          {/* Other contents from the same submenu */}
          {activeSubmenuData && activeSubmenuData.contents.length > 1 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">More in {activeSubmenuData.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeSubmenuData.contents
                  .filter(content => content.id !== activeContent)
                  .map(content => (
                    <button
                      key={content.id}
                      onClick={() => handleContentSelect(content.id)}
                      className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all text-left"
                    >
                      <div className="w-full h-32 relative rounded overflow-hidden mb-3 bg-gray-200">
                        <Image
                          src={content.coverImage.file.formats.medium.url}
                          alt={content.coverImage.alternativeText || content.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-medium">{content.title}</h4>
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UmrahContent;