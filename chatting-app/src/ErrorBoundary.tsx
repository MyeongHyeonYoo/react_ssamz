import { Component, ErrorInfo } from 'react'

type State = { hasError: boolean; errorMessage: string };
type Props = { children: JSX.Element };

export default class ErrorBoundary extends Component<Props, State> {
    state = { hasError: false, errorMessage: ""};

    static getDerivedStateFromError(error: Error): State {
        // 에러가 발생했을 때 hasError 상태를 true로 변경
        return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // 여기서는 에러 로깅, 서버로의 전송 등 작업을 수행
        console.log("에러 발생! ");
        console.log("에러명 : ", error.name);
        console.log("에러 메시지 : ", error.message);
        console.log("컴포넌트 스택 : ", errorInfo.componentStack);
    }

    render() {
        // 에러가 발생했다면 fallback UI를 렌더링
        if (this.state.hasError) {
            return (
                <div>
                    <h2>에러 발생</h2>
                    <hr />
                    <p>에러 메시지 : {this.state.errorMessage} </p>
                </div>
            );
        }
        // 에러가 없다면 children을 렌더링
        return this.props.children;
    }
}