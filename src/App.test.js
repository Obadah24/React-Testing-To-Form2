import { render, screen, fireEvent, renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import App, { useCounter } from './App'
describe("React Testing Tutorials", () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript']
  test("render correctly", () => {
    render(<App Skills={skills}/>)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test("render a list of skills", () => {
    render(<App Skills={skills}/>)
  const listItemElement = screen.getAllByRole('listitem')
  expect(listItemElement).toHaveLength(skills.length)
})

  test('render login button', () => {
    render(<App Skills={skills}/>)
    const loginButton = screen.getByRole('button', {
      name: /login/i
    })
    expect(loginButton).toBeInTheDocument()
  })
  
  test('Start Learning button is not rendered', () => {
    render(<App Skills={skills}/>)
    const startLearningButton = screen.queryByRole('button', {
      name: /start learning/i
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('Start Learning button is eventually displayed', async () => {
      render(<App Skills={skills}/>)
      const startLearningButton2 = await screen.findByRole('button', 
      {name: /start learning/i},
      {timeout: 5000}
    )
    expect(startLearningButton2).toBeInTheDocument()
  })



test('render correctly3', () => {
      render(<App Skills={skills}/>)
      const countElement = screen.getByTitle('counter', {
        level: 1
      })
      expect(countElement).toBeInTheDocument()
      const increamentButton = screen.getByRole('button',{
        name:/Increment/i
      })
      expect(increamentButton).toBeInTheDocument()
    })
    
    test('render of a count 0', () => {
      render(<App Skills={skills}/>)
      const countElement = screen.getByTitle('counter', {
        name:/Increment/i
      })
      expect(countElement).toHaveTextContent('0')
    })
    test('render of a count of 1 after the increment button', () => {
      render(<App Skills={skills}/>)
      const increamentButton2 = screen.getByRole('button',{
        name:/Increment/i
      })
      fireEvent.click(increamentButton2)
      const countElement2 = screen.getByTitle('counter', {
        name:/Increment/i
      })
      expect(countElement2).toHaveTextContent('1')
    })
  
    test('render a count of 10 after clicking the set button', () => {
      render(<App Skills={skills}/>)
      const amountInput = screen.getByTitle('amount', {
        name: /amount/i
      }) 
      fireEvent.change(amountInput, {target: {value: '10'}})
      expect(amountInput.value).toBe('10')
    })
  
    test('should render the initial state', () => {
      const {result} = renderHook(useCounter)
      expect(result.current.count2).toBe(0)
    })
  
    test('should increment the count', () => {
      const {result} = renderHook(useCounter)
      act(() => result.current.increment()) 
      expect(result.current.count2).toBe(1)
    })
  
    test('should descrement the count', () => {
      const {result} = renderHook(useCounter)
      act(() => result.current.descriment()) 
      expect(result.current.count2).toBe(-1)
    })
  
    test('render correctly2', ()=> {
      render(<App Skills={skills}/>)
      const pageHeading = screen.getByRole('heading',{
        level: 1,
        name:'Little Lemon Restaurant'
      }) 
      
      expect(pageHeading).toBeInTheDocument()
      const sectionHeading = screen.getByRole('heading',{
        level: 2
      }) 
      expect(sectionHeading).toBeInTheDocument()
  
      const  paragraphElement = screen.getByText('All Fields are mandatory')
      expect(paragraphElement).toBeInTheDocument()
  
      const  paragraphElement2 = screen.getByText(/all/i)
      expect(paragraphElement2).toBeInTheDocument()
  
      const  paragraphElement3 = screen.getByText(/mandatory$/i)
      expect(paragraphElement3).toBeInTheDocument()
  
      const  paragraphElement4 = screen.getByText((content) => content.startsWith('All'))
      expect(paragraphElement4).toBeInTheDocument()
  
      const  imageElement = screen.getByAltText('a person with a laptop')
      expect(imageElement).toBeInTheDocument()
  
      const  customElement = screen.getByTestId('custom-element')
      expect(customElement).toBeInTheDocument()
  
      const  CloseElement = screen.getByTitle('Close')
      expect(CloseElement).toBeInTheDocument()
  
      const nameElement = screen.getByRole('textbox', {
        name: "Name"
      }) 
      expect(nameElement).toBeInTheDocument()
  
      const nameElement2 = screen.getByLabelText("Name", {
        selector: 'input'
      }) 
      expect(nameElement2).toBeInTheDocument()
  
      const nameElement3 = screen.getByPlaceholderText('Fullname') 
      expect(nameElement3).toBeInTheDocument()
  
      const nameElement4 = screen.getByDisplayValue('Vishwas') 
      expect(nameElement4).toBeInTheDocument()
  
      const jobLocationElement = screen.getByRole('combobox') 
      expect(jobLocationElement).toBeInTheDocument()
      
      const jobLocationElement2 = screen.getByLabelText('Name', {
        selector: 'select'
      }) 
      expect(jobLocationElement2).toBeInTheDocument()
  
      const termsElement = screen.getByRole('checkbox') 
      expect(termsElement).toBeInTheDocument()
  
  
      const submitButtonElement = screen.getByRole('button',{
        name:'Submit'
      })
      expect(submitButtonElement).toBeInTheDocument()
    })

  })
