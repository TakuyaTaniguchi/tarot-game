import {Header} from '../components/layout/header'
import {Footer}from '../components/layout/fotter'

export function Home() {
    return (
        <div>
            <Header >
                <div>head</div>
            </Header>
            <div>メインコンテンツ</div>
            <Footer>
                <div>footer</div>
            </Footer>
        </div>
    )
}