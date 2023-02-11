import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Lists from './components/Lists'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isLoading: false,
    travelPackageList: [],
  }

  componentDidMount() {
    this.getDetailsOfApi()
  }

  getApiDetails = details => {
    console.log(details)
  }

  getDetailsOfApi = async () => {
    this.setState({isLoading: true})
    const apiUrlPackages = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrlPackages, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))
      this.setState({
        travelPackageList: updatedData,
        isLoading: false,
      })
    }
  }

  renderLoader = () => (
    <div className="loaderContainer" data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderTravelPackages = () => {
    const {travelPackageList} = this.state
    return (
      <ul className="travelGuideList">
        {travelPackageList.map(each => (
          <Lists key={each.id} TravelPackageItemDetails={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Travel Guide</h1>
        {isLoading ? this.renderLoader() : this.renderTravelPackages()}
      </div>
    )
  }
}

export default App
