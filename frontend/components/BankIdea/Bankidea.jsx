import React from "react";
import {Card} from "@mui/material";
import {CardHeader} from "@mui/material";
import {CardContent} from "@mui/material";
import IdeaList from "./IdeaList";
import {useRouter} from "next/router";

export default function Bankidea(){
    const idea = useRouter()
    const list = [
      {id: 1, title: "Самая лучшая инновационная идея.", disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla arcu eleifend blandit urna arcu.Lorem ipsum dolor sit amet, consectetu..."},
      {id: 2, title: "Самая лучшая инновационная идея.", disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla arcu eleifend blandit urna arcu.Lorem ipsum dolor sit amet, consectetu..."},
    ];

  return (
      <Card sx={{ minWidth: 300,
                  padding: '24px',
                  borderRadius: '12px',
                  backgroundColor: '#252A41',
                  color: '#FFFFFF',
                }}>
          <CardHeader sx={{padding: '0 0 32px 0'}} title={"Банк идей"}
              subheader="Все"
              subheaderTypographyProps={{                
              fontSize: 14,
              color: '#818CF8',
              position: 'relative',
              top: -27,
              align: 'right'
            }}
                      onClick={ () => idea.push("/idea")}
          />
          <CardContent sx={{padding: 0,
              display: 'flex',
              overflow: 'hidden'
          }}>
            <IdeaList list={list}/>
          </CardContent>
      </Card>
  );
}

