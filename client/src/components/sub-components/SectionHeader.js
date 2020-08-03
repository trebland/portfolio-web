export const HeaderLink = ({headerTitle, linkDestination}) => (
    <Button style={{margin: '25px'}} variant="contained" className="background-accent">
      <a href={linkDestination} className="button__text header accent-color">{headerTitle}</a>
    </Button>
)