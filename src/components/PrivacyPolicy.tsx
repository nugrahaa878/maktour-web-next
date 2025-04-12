import { PolicyContent, PolicyText } from "@/types/policy"
import { ReactNode } from "react"

interface PrivacyPolicyProps {
  policy: PolicyContent[];
}

const renderText = (text: PolicyText) => {
  let className = "";
  if (text.bold) className += "font-bold ";
  if (text.italic) className += "italic ";
  if (text.underline) className += "underline ";

  return (
    <span className={className.trim()}>
      {text.text}
    </span>
  );
};

const Heading = ({ level, children }: { level: number; children: ReactNode }) => {
  switch (level) {
    case 1:
      return <h1 className="text-2xl font-semibold mt-6 mb-4">{children}</h1>;
    case 2:
      return <h2 className="text-xl font-semibold mt-6 mb-4">{children}</h2>;
    case 3:
      return <h3 className="text-lg font-semibold mt-6 mb-4">{children}</h3>;
    case 4:
      return <h4 className="text-base font-semibold mt-6 mb-4">{children}</h4>;
    case 5:
      return <h5 className="text-sm font-semibold mt-6 mb-4">{children}</h5>;
    case 6:
      return <h6 className="text-xs font-semibold mt-6 mb-4">{children}</h6>;
    default:
      return <h2 className="text-xl font-semibold mt-6 mb-4">{children}</h2>;
  }
};

const renderContent = (content: PolicyContent) => {
  switch (content.type) {
    case "heading":
      return (
        <Heading level={content.level}>
          {content.children.map((child, index) => (
            <span key={index}>{renderText(child)}</span>
          ))}
        </Heading>
      );

    case "paragraph":
      return (
        <p className="mb-4">
          {content.children.map((child, index) => (
            <span key={index}>{renderText(child)}</span>
          ))}
        </p>
      );

    case "list":
      const ListTag = content.format === "ordered" ? "ol" : "ul";
      return (
        <ListTag className={`list-${content.format} pl-4 mb-4`}>
          {content.children.map((item, index) => (
            <li key={index}>
              {item.children.map((child, childIndex) => (
                <span key={childIndex}>{renderText(child)}</span>
              ))}
            </li>
          ))}
        </ListTag>
      );

    default:
      return null;
  }
};

export const PrivacyPolicy = ({ policy }: PrivacyPolicyProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {policy.map((content, index) => (
        <div key={index}>
          {renderContent(content)}
        </div>
      ))}
    </div>
  );
}; 