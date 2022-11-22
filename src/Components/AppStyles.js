import styled from 'styled-components'

const AppStyles = styled.div`
    background-color: #dce0e0;
    height: 100vh;

    .roster {
        background-color: white;
        width: 45rem;
        border-radius: .5rem;
        border: 1px solid lightgray;
        height: 40rem;
        overflow-y: scroll;
        overflow-x: hidden;
        ::-webkit-scrollbar {
            display: none;
        }   
    }

    .pic-student {
        border-radius: 50%;
        border: 1px solid lightgray;
        width: 6rem;
        height: 6rem;
    }

    .info-student {
        h1 {
            margin-bottom: 1rem;
        }
        p { 
            color: gray;
            margin-top: -1rem; 
            margin-left: 1rem; 
        }
    }

    .border-bottom {
        border-bottom: 1px solid lightgray;
    }

    .search-bar {
        width: 95%;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: 1px solid lightgray;
        &:focus {
            outline: none;
        }
    }

    .tag {
        background-color: lightgray;
        height: 2rem;
        padding-top: .2rem;
        max-width: 5rem;
        border-radius: .25rem;
    }

    .input-tag {
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: 1px solid lightgray;
        width: 12rem;
        &:focus {
            outline: none;
        }
    }

    .text-gray {
        color: gray;
    }
`

export default AppStyles