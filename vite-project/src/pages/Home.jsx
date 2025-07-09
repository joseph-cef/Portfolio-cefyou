import {ThemeToggle} from '../Components/ThemeToggle'; 
import {StarBackground} from '../Components/StarBackground';
const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
    <ThemeToggle />
        {/* Bg Effects */}
    <StarBackground />
        {/* Navbar */}

        {/* Main Content */}
    </div>
  )
}

export default Home