import React from "react";

const StorySettings = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const house = form.house.value;
    if (house && name) props.addStudent({ name, house });
    form.reset();
  };
  return (
    <div className='StorySettings'>
      <form onSubmit={submitHandler}>
        <div>
          <h3>Add a new Wizard</h3>
        </div>
        <input placeholder='name' type='text' name='name' />
        <select name='house'>
          <option selected value='Gryffindor'>
            Gryffindor
          </option>
          <option value='Slytherin'>Slytherin</option>
          <option value='Hufflepuff'>Hufflepuff</option>
          <option value='Ravenclaw'>Ravenclaw</option>
        </select>
        <input type='submit' />
      </form>
      <form>
        <div>
          <h3>Filter By House</h3>
        </div>
        <input
          onChange={props.filterHandler}
          name='selectedHouse'
          type='radio'
          value='All'
        />
        All
        <input
          onChange={props.filterHandler}
          name='selectedHouse'
          type='radio'
          value='Gryffindor'
        />
        Gryffindor
        <input
          onChange={props.filterHandler}
          name='selectedHouse'
          type='radio'
          value='Slytherin'
        />
        Slytherin
        <input
          onChange={props.filterHandler}
          name='selectedHouse'
          type='radio'
          value='Hufflepuff'
        />
        Hufflepuff
        <input
          onChange={props.filterHandler}
          name='selectedHouse'
          type='radio'
          value='Ravenclaw'
        />
        Ravenclaw
      </form>
    </div>
  );
};

export default StorySettings;
