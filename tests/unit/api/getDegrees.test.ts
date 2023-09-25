import type { Mock } from "vitest";
import axios from "axios";

import getDegrees from "@/api/getDegrees";

vi.mock("axios");
const axiosGetMock = axios.get as Mock;

describe("getJobs", () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
      data: [
        {
          id: 1,
          title: "Master's",
        },
      ],
    });
  });

  it("fetches degrees that candidates can apply to", async () => {
    await getDegrees();
    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/degrees");
  });

  it("extracts degrees from response", async () => {
    const data = await getDegrees();
    expect(data).toEqual([{ id: 1, title: "Master's" }]);
  });
});
