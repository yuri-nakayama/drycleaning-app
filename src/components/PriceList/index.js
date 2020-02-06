const PriceList = () => {
  return (
    {
      categories.map(category => {
        return (
          <React.Fragment>
            <h2>category.name</h2>
            {
              category.items.map((item, i) => {
                return (
                  <div style={{borderTop: i === 0 ? '1px solid black' : 'none' }}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                )
              })
            }
          </React.Fragment>
        )
      })
    }
  )
}
