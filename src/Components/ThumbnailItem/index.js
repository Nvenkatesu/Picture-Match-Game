import './index.css'

const ThumbnailItem = props => {
  const {details, onClickThumbnail} = props
  const {thumbnailUrl} = details

  const getThumbnailUrl = () => {
    onClickThumbnail(thumbnailUrl)
  }

  return (
    <li>
      <button type="button" className="thumb-button" onClick={getThumbnailUrl}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
