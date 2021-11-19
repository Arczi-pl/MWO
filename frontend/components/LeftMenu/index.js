import Wrapper from './Wrapper'
import LeftMenuLink from './LeftMenuLink'

const LeftMenu = (props) => {
    const { data } = props
    console.log(data)
    return(
        <Wrapper>
            <ul>
                {data.map(category => (
                    <LeftMenuLink href={category.slug} text={category.name} />
                ))}
            </ul>
        </Wrapper>
    )
}

export default LeftMenu
