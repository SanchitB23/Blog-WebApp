import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter,Route,Switch} from 'react-router-dom';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import cal1 from './components/test/cal1';
import cal2 from './components/test/cal2';
import cal3 from './components/test/cal3';
import calF from './components/test/calFinal';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/posts/new' component={PostsNew}/>
          <Route path='/posts/:id' component={PostsShow}/>
          <Route path='/' component={PostsIndex}/>
          {/* <Route path='/cal/test1' component={cal1}/> */}
          {/* <Route path='/cal/test2' component={cal2}/>
          <Route path='/cal/testF' component={calF}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
