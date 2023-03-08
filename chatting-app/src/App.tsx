import { Component } from 'react'
import Chatting from './Chatting'
import ErrorBoundary from "./ErrorBoundary";
import UserList from "./UserList";

export default class App extends Component<{}, {}> {
  // state = {};

  render() {
    return (
      // <div>
      //   <Chatting />
      // </div>
      <ErrorBoundary>
        <div>
          참여 사용자 :
          <UserList users={["gdhong", "mrlee"]} />
          {/* <UserList users={"gdhong"} /> 에러 */} 
          <hr />
          <Chatting />
        </div>
      </ErrorBoundary>
    );
  }
}