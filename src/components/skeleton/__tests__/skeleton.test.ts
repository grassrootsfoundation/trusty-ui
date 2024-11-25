import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";

import Skeleton from "$components/skeleton/skeleton.svelte";

describe("Skeleton", () => {
  it("works", () => {
    render(Skeleton, {});
  });
});
