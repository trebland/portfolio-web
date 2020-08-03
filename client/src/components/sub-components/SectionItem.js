// Takes the following parameters to construct successfully
// img: Image of the project to display
// title: Title of the project
// internalLink: Link to the project page (internal link)
// contributors: List of names of those who contributed to the project
// technologies: List of technology icons that the project is composed of
// externalLinks: List of external links, linking to live project locations
// date: date the project was released

export const SectionItem = ({img, title, internalLink, contributors, technologies, externalLinks, date}) => (
    <Grid container item direction="row" justify="center" alignItems="center" spacing={3}>
      <Grid container item direction="column" justify="center" alignItems="center"xs={12} sm={6}>            
        <ImageText internalLink={internalLink} title={title}>
          <Grid container item direction="row" justify="center" alignItems="center" xs={12}>            
              <img style={imageStyles.coverStyle} src={img} alt="Placeholder Text"/>            
          </Grid>
        </ImageText>
      </Grid>
      <GridDescription title={title} contributors={contributors} technologies={technologies} externalLinks={externalLinks} date={date} />
    </Grid>
)

const GridDescription = ({title, contributors, technologies, externalLinks, date}) => (
    <Grid container item direction="column" justify="center" alignItems="center" xs={12} sm={6}>            
      <div className="title" style={textStyles.descriptionTitle}>{title}</div>
      <div style={textStyles.descriptionContent}><CreditContainer>{contributors}</CreditContainer></div>
      <div style={textStyles.descriptionContent}><TechnologyContainer>{technologies}</TechnologyContainer></div>
      <div style={textStyles.descriptionContent}>{externalLinks}</div>
      <div style={textStyles.descriptionContent}><DateContainer>{date}</DateContainer></div>
    </Grid>
)

const ImageText = ({title, internalLink, children}) => (
    <div style={{width: '100%'}} className="img__wrap">
      <div className="img__img">{children}</div>
      <a style={{borderRadius: '20px'}} href={internalLink} className="img__description img__text">Read more about the {title} Campaign</a>
    </div>
)

const CreditContainer = ({children}) => (
    <span className="link-container">
      <h4 className="caption">Credits</h4>
      {children}
    </span>
  )
  
  const TechnologyContainer = ({children}) => (
    <span className="link-container">
      <h4 className="caption">Technologies</h4>
      {children}
    </span>
  )

  const DateContainer = ({children}) => (
    <span className="source-container">
      <h4 className="caption">Released</h4>
      {children}
    </span>
  )