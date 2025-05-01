import { UmrahInfoResponse } from "@/types/umrah";
import { mockUmrahData } from "@/mocks/umrahData";

/**
 * Mock service for Umrah data when the backend is not ready
 */
export const mockUmrahService = {
  /**
   * Get Umrah information with a simulated API delay
   */
  getUmrahInfo: async (): Promise<UmrahInfoResponse> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return mockUmrahData;
  }
}; 