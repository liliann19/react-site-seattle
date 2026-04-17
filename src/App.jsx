import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Card from "./components/Card"
import Section from './components/Section'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Section title= "Fun Fact">
      <Card title="Fun Fact #1" description="Seattle has an entire wall filled with used gum." />
      <Card title="Fun Fact #2" description="Seattle is built on top of another city." />
      <Card title="Fun Fact #3" description="Seattle was home to the world's first espresso cart." />
      </Section>

      <Section title= "Tourist Place">
      <Card title="Tourist Place #1" description="Space Needle" />
      <Card title="Tourist Place #2" description="Chihuly Garden and Glass" />
      <Card title="Tourist Place #3" description="Pike Place Market" />
      </Section>

      <Section title= "Nature & outdoors">
      <Card title="Nature & Outdoors #1" description="Discovery Park" />
      <Card title="Nature & Outdoors #2" description="Alki Beach Park" />
      <Card title="Nature & Outdoors #3" description="Gas Works Park" />
      </Section>
    </>
  )
}

export default App
