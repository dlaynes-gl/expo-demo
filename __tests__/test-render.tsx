import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import { Example } from "../src/components/Example"

describe('<Example />', function(){
    it('can be rendered', function(){
        const { container } = render(<Example />);
        expect(container).toBeTruthy();
    })

    it('contains elements with text', function(){
        const { getByTestId } = render(<Example />)
        expect(getByTestId('example-component-text').props.children).toBe('This is an example')
    })
})