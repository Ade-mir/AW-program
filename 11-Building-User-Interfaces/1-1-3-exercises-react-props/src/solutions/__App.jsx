require('../styles/app.css');

const React = require('react');

const {
  MyFirstComponentWithProps,
  MySecondComponentWithProps,
  MyThirdComponentWithProps,
  MyFourthComponentWithProps,
  MyFifthComponentWithProps,
  MySixthComponentWithProps,
  MySeventhComponentWithProps,
  MyEigthComponentWithProps
} = require('./Exercise-3.jsx');

const App = React.createClass({
  render() {
    return (
      <div>
        <div className="chapter-1-3">
          <div className="chapter-1-3-1">
            <h3>Solution 3-1: My first component with props</h3>

            <MyFirstComponentWithProps
              name={'Hank Moody'}
            />

            <MyFirstComponentWithProps
              name={'Charlie Runkle'}
            />

            <MyFirstComponentWithProps
              name={'Trixie'}
            />
          </div>

          <div className="chapter-1-3-2">
            <h3>Solution 3-2: My second component with props</h3>

            <MySecondComponentWithProps
              customClasses={['custom-class-1', 'custom-class-2']}
            />
          </div>

          <div className="chapter-1-3-3">
            <h3>Solution 3-3: My third component with props</h3>

            <MyThirdComponentWithProps
              paragraphs={[
                'This is paragraph 1',
                'This is paragraph 2'
              ]}
            />
          </div>

          <div className="chapter-1-3-4">
            <h3>Solution 3-4: My fourth component with props</h3>

            <MyFourthComponentWithProps
              lists={[
                ['List 1 - Item 1', 'List 1 - Item 2'],
                ['List 2 - Item 1', 'List 2 - Item 2']
              ]}
            />
          </div>

          <div className="chapter-1-3-5">
            <h3>Solution 3-5: My fifth component with props</h3>

            <MyFifthComponentWithProps>
              <p>Hello World!</p>
              <p>Goodbye world..</p>
            </MyFifthComponentWithProps>
          </div>

          <div className="chapter-1-3-6">
            <h3>Solution 3-6: My sixth component with props</h3>

            <MySixthComponentWithProps showDetails={true}>
              <p>Hello World!</p>
              <p>Goodbye world..</p>
            </MySixthComponentWithProps>
          </div>

          <div className="chapter-1-3-7">
            <h3>Solution 3-7: My seventh component with props</h3>

            <MySeventhComponentWithProps title='Awesome Title'>
              <p>Hello World!</p>
              <p>Goodbye world..</p>
            </MySeventhComponentWithProps>
          </div>

          <div className="chapter-1-3-8">
            <h3>Solution 3-8: My eigth component with props</h3>

            <MyEigthComponentWithProps title='Awesome Title' showDetails={true}>
              <p>Hello World!</p>
              <p>Goodbye world..</p>
            </MyEigthComponentWithProps>
          </div>
        </div>

        <div className="chapter-1-4">
          <div className="chapter-1-4-1">
            <h3>Solution 4-1: Checkbox with label (state and events)</h3>

            <CheckboxWithLabel
              labelOn='On'
              labelOff='Off'
            />
          </div>

          <div className="chapter1-4-1">
            <h3>Solution 4-2: Click counter (state and events)</h3>

            <ClickCounter />
          </div>

          <div className="chapter1-4-3">
            <h3>Solution 4-3: Click counter with initial value (state and events)</h3>

            <ClickCounterWithInitialValue initialValue={10} />
          </div>

          <div className="chapter1-4-4">
            <h3>Solution 4-4: Incrementer / Decrementer (state and events)</h3>

            <IncrementDecrement />
          </div>

          <div className="chapter1-4-5">
            <h3>Solution 4-5: Incrementer / Decrementer with custom step interval (state and events)</h3>

            <IncrementDecrementStep stepInterval={5} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
