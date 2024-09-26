import React from "react";
import { Box, Button, Grid, Switch, Typography } from '@mui/material';
import SectionTitle from "../../section-title";


export default function OptionBox({
    productData,
    setAddProductsActive,
    handleDelete
}: any) {



    return (

        <>
            <Box>
                <SectionTitle title="Add a product option" />
                <Box
                    sx={{
                        background: "#ffffff",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "20px",
                        borderRadius: "20px",
                        marginTop: "20px",
                        alignItems: "center"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: "80px",
                        }}
                    >
                        <Typography>
                            {productData?.optionData?.optionName}
                        </Typography>
                        {productData?.optionData?.optionValue?.map((item: any) => (
                            <Typography
                                sx={{
                                    border: "1px solid gray",
                                    borderRadius: "50%",
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                {item.name}
                            </Typography>

                        ))}
                    </Box>
                    <Box>
                        <Button
                            onClick={setAddProductsActive}
                        >
                            edit
                        </Button>
                        <Button
                            onClick={handleDelete}
                        >
                            delete
                        </Button>
                    </Box>
                </Box>
                <Button variant="contained" color="primary"
                    onClick={() => setAddProductsActive(true)}
                    sx={{
                        alignSelf: 'start',
                        borderRadius: "16px",
                        marginTop: "20px"

                    }}>
                    Add a product option
                </Button>
            </Box>
        </>
    )
}