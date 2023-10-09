import ReactDOM from "react-dom";
import {MainApp} from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainApp />, div);
    ReactDOM.unmountComponentAtNode(div);
})

describe("ProfileContainer component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileContainer status="ProfileContainer" />);
        const instance = component.getInstance();
        expect(instance.state.text).toBe("ProfileContainer");
    });

    test("span should be displayed ", () => {
        const component = create(<ProfileContainer status="ProfileContainer" />);
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    });

    test("span should be contained a correct status ", () => {
        const component = create(<ProfileContainer status="ProfileContainer" />);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.children[0]).toBe('ProfileContainer');
    });

    test("input should be displayed ", () => {
        const component = create(<ProfileContainer status="ProfileContainer" />);
        const root = component.root;

        expect(() => {
            let input = root.findByType('input')
        }).toThrow();
    });

    test("input should be displayed in editMode ", () => {
        const component = create(<ProfileContainer status="ProfileContainer" />);
        const root = component.root;
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('ProfileContainer');
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileContainer status="ProfileContainer" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls).toBe(1);
    });
});