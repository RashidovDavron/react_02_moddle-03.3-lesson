import styled from "styled-components";

const DashboardTemplateWrapper = styled.section`
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;


    aside{
        min-width: 400px;
        min-height: 100%;
        background-color: #fffced;
        height: 100vh;
        margin: 0;
        z-index: 10;
        overflow: hidden;

        img{
            width: 300px;
            text-align: center;
        }

        .list-group{
            margin: 0;
            padding: 0;
            cursor: pointer;
            display: flex;
            gap: 4px;
            
            .active{
                background-color: #ffe854 !important;
                margin: 0;
                width: 100%;
                height: 100%;
                color: #3d3c39;
                border-radius: 8px;

                .svg-inline--fa{
                    color: #367cf5 !important;
                }
            } 
           
                       
            .list-group-item {
                padding: 8px 8px;
                width: 100% !important;
                display: flex;
                flex-direction: row;
                gap: 4px;
                align-items: center;
                color: #3d3c39;
                background-color: #fffced;
                border: none !important;
                border-radius: 8px;

                .svg-inline--fa{
                    font-size: 34px;
                    color: #78909c;
                    padding-left: 8px;
                }

                a{
                    text-decoration: none;
                    font-size: 18px;
                    color: #21211f;
                    font-family: Inter, sans-serif;
                    width: 100%;
                    height: 100%;
                    font-weight: 400;
                    padding: 0;
                }

                small{
                    font-size: 11px;
                    color: #5e6366;
                }

            }
        }
        
    }

    .rightSide {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;

    header{
        .fa-circle-user{
            font-size: 30px;
        }
    }
    main {
        flex: 1;  
        overflow-y: auto;
        padding: 1rem;

            .nav-pills .nav-link.active {
                background-color: #ffe854 !important;
                color: #000 !important;
                font-weight: bold;
            }

            a{
                color: #000 !important;
            }

            button{
                background-color: #ffe854 !important;
                color: #000 !important;
                font-weight: bold;
                border: none;
                padding: 8px 40px;
            }
        }   
}
`;

export default DashboardTemplateWrapper;