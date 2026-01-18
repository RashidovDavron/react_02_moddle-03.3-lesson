import styled from "styled-components";

const DashboardTemplateWrapper = styled.section`
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;

    aside{
        width: 300px;
        height: 100%;
        background-color: #fffced;
        height: 100vh;
        margin: 0;
        z-index: 10;

        img{
            width: 200px;
        }

        .list-group{
            margin: 0;
            padding: 0;
            cursor: pointer;
            display: flex;
            gap: 8px;
           

             .active{
                background-color: #ffe854 !important;
            }
            
            .list-group-item{
                padding: 4px 8px;
                display: flex;
                gap: 4px;
                align-items: center;
                color: #3d3c39;
                background-color: #fffced;
                border: none !important;
                border-radius: 8px;

                .svg-inline--fa{
                    font-size: 30px;
                    color: #78909c;
                }

                a{
                    text-decoration: none;
                    color: #21211f;
                    font-family: Inter, sans-serif;
                }

                span{
                    font-size: 10px;
                    padding-bottom: 4px;
                    color: #5e6366;
                }

            }
        }
        
    }

    .rightSide {
    display: flex;
    flex-direction: column;
    flex: 1;
}


`;

export default DashboardTemplateWrapper;