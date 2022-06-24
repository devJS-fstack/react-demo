import { ThemeContext } from './Theme_Context'
import { useContext } from 'react'
import '../.././App.css'


function Paragraph() {
    const data = useContext(ThemeContext)
    return (
        <p className={data.theme}>
            Her life spanned years of incredible change for women as they gained more rights than ever before.
            Paraphrase: She lived through the exciting era of women's liberation.
        </p>
    )
}

export default Paragraph