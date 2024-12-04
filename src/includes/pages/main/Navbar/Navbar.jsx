import Logo from './Logo'

export default function Intro() {
    return(
        <>
            <div className='nav'>
                <Logo/>
                <div className='links'>
                    <a href="">About Me</a>
                    <a href="">My Projects</a>
                    <a href="">Download CV</a>
                </div>
            </div>
        </>
    )
}