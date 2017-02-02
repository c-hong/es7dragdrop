import { connect } from 'react-redux'
import AddButton from '../components/AddButton'
import { addNewComponent } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  components: state.components
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addComponent: (type) => {
    dispatch(addNewComponent(type))
  }
})

const AddButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton)

export default AddButtonContainer
