/* eslint-disable prettier/prettier */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'

describe('Home', () => {
  it('renders title', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Welcome to CMS/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Defining a Modern Squadron/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

test('simple addition', () => {
  expect(2 + 2).toBe(4);
})

describe('Index page', () => {
  it("should render", () => {
    render(<Home />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  })
})