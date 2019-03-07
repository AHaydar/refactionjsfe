export default {
    everyone:  
    `{
        info
        people 
        {
            id,
            name,
            age,
            gender
        }
    }`,
    male:
    `{
        info
        people (gender: "male")
        {
          id,
          name,
          age,
          gender
        }
    }`,
    female:
    `{
        info
        people (gender: "female")
        {
          id,
          name,
          age,
          gender
        }
    }`,
    over30: 
    `{
        info
        people (age: {
          value: 30
          operator: GTE
        })
        {
          id,
          name,
          age,
          gender
        }
    }`,
    under30:
    `{
        info
        people (age: {
            value: 30
          operator: LT
        })
        {
          id,
          name,
          age,
          gender
        }
    }`

};