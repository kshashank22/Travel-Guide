import {
  TravelPackageListItem,
  TravelPackageImage,
  TravelInfoContainer,
  TravelPackageName,
  TravelPackageInfo,
} from './styledComponents'

const Lists = props => {
  const {TravelPackageItemDetails} = props
  const {name, imageUrl, description} = TravelPackageItemDetails

  return (
    <TravelPackageListItem>
      <TravelPackageImage src={imageUrl} alt={name} />
      <TravelInfoContainer>
        <TravelPackageName>{name}</TravelPackageName>
        <TravelPackageInfo>{description}</TravelPackageInfo>
      </TravelInfoContainer>
    </TravelPackageListItem>
  )
}

export default Lists
