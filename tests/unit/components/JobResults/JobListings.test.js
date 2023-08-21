import { screen, render } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import axios from "axios";

import JobListings from "@/components/JobResults/JobListings.vue";

// console.log(axios);
vi.mock("axios");

describe("JobListings", () => {
  const renderJobListings = () => {
    render(JobListings, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });
  };

  it("fetches jobs", () => {
    axios.get.mockReturnValue({ data: [] });
    renderJobListings();
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for every job", async () => {
    axios.get.mockReturnValue({ data: Array(15).fill({}) });
    renderJobListings();

    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(15);
  });
});
