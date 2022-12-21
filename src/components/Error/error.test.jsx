import { render, screen} from "@testing-library/react"
import Error404 from "./error";

describe('<Error404 />', () => {
    test("Should render component", () => {
        render(<Error404 />)
        const input = screen.getByText('Esta pagina no existe')
    });

});