import { HajjInfoResponse } from "@/types/hajj";
import { mockHajjData } from "@/mocks/hajjData";

/**
 * Mock service for Hajj data when the backend is not ready
 */
export const mockHajjService = {
  /**
   * Get Hajj information with a simulated API delay
   */
  getHajjInfo: async (): Promise<HajjInfoResponse> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return mockHajjData;
  }
}; 