import Home from "../../pages/index"
import { render } from "@testing-library/react"

it("테스트", () => {
    const result = render(<Home></Home>)
    expect(result.container).toMatchSnapshot();
})