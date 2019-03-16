require "imba-router"

tag Dashboard
  def render
    <self> "Dashboard"

tag ScreenTwo
  def render
    <self> "Screen Two"

tag ScreenThree
  def render
    <self> "Yay imba! (っ◕‿◕)っ"

tag App
  def render
    <self>
      <nav#top-nav>
        <a route-to="/"> "Dashboard"
        <a route-to="/two"> "Screen Two"
        <a route-to="/three"> "Screen Three"
      <hr>
      <div#content>
        <Dashboard route="/">
        <ScreenTwo route="/two">
        <ScreenThree route="/three">

Imba.mount(<App>)
