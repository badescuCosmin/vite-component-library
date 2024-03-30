
import { render } from '@testing-library/react';
import { Button } from './button.component';

test('clicking the button increments counter', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    const button = getByText('Click Me');

    // Initial count
    expect(button).toBeInTheDocument();

});
