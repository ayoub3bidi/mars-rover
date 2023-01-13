import ImageCard from './ImageCard'
import { render, screen } from '@testing-library/react'

describe('Image Card test', () => {
    beforeEach(() => {
        render(<ImageCard 
            handleShow={() => setShow(true)}
            earth_date="2022-11-21"
            img_src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00100/opgs/edr/fcam/FRA_406374643EDR_F0050178FHAZ00301M_.JPG"
        />)
    })

    test('Image Card should render earth date', () => {
        expect(screen.getByText("2022-11-21")).toBeDefined()
    })

    test('Image Card should render a image', () => {
        expect(screen.getByRole("img")).toBeDefined()
    })

    test('Image Card should render a button', () => {
        expect(screen.getByRole("button")).toBeDefined()
    })
})