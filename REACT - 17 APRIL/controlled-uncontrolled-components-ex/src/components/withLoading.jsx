const withLoading = (WrappedComponent) => {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if(isLoading) {
            return <div><i className="fa fa-spin fa-spinner"></i></div>;
        }
        return <WrappedComponent {...props} />
    };
}

export default withLoading;