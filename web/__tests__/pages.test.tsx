import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomePage from '../app/page'
import InfoPage from '../app/info/page'
import PrivacyPolicyPage from '../app/privacy-policy/page'

describe('Pages', () => {
  test('Home renders', () => {
    render(<HomePage />)
    expect(
      screen.getByRole('heading', { name: /to get started/i })
    ).toBeInTheDocument()
  })

  test('Info renders', () => {
    render(<InfoPage />)
    expect(
      screen.getByRole('heading', { name: /about persistent stopwatch/i })
    ).toBeInTheDocument()
  })

  test('Privacy policy renders', () => {
    render(<PrivacyPolicyPage />)
    expect(
      screen.getByRole('heading', { name: /privacy policy/i })
    ).toBeInTheDocument()
  })
})
