import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import styles from '../stylesheets/DetailsStylesheet';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';


interface DetailsProps {
    headline?: string;
    body?: string;
}


const Details = ({ headline, body }: DetailsProps) => {
    const {theme} = useThemeContext();

  return (
    
<ThemedView style={{marginHorizontal:10}}>
        {headline && (
            <ThemedView style={styles.DetailsHeadlineContainer}>
            <ThemedView style={{
                ...styles.DetailsHeadlinesquare,
                borderColor: theme === 'dark' ? 'gray' : 'green'
            }}>
                <ThemedText
                    type='subtitle'
                    style={{
                    ...styles.DetailsHeadline,
                    color: theme === 'dark' ? 'white' : 'black'
                    }}
                >
                    {headline}
                </ThemedText>
            </ThemedView>
        </ThemedView>
        )}

        <ThemedText 
        type='default'
        style={{
            color: theme === 'dark' ? 'white' : 'black',
            ...styles.DetailsBody
        }}>
            {body}
        </ThemedText>
    </ThemedView>
  )
}

export default Details