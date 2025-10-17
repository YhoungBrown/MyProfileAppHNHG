import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';
import styles from '../stylesheets/DetailsStylesheet';
import SayHiButton from './SayHiButton';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';


interface DetailsProps {
    headline?: string;
    body?: string;
    briefText?: string;
    fullText?: string;
    onContactClick?: () => void;
}


const Details = ({ headline, body, briefText, fullText, onContactClick }: DetailsProps) => {
    const {theme} = useThemeContext();
    const [isPressed, setIsPressed] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    const cardStyle = {
        marginHorizontal: 12,
        marginVertical: 6,
        padding: 16,
        borderRadius: 16,
        backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
        shadowColor: theme === 'dark' ? '#000' : '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: isPressed 
            ? (theme === 'dark' ? 0.5 : 0.2) 
            : (theme === 'dark' ? 0.3 : 0.1),
        shadowRadius: 8,
        elevation: 4,
        borderWidth: 1,
        borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
        transform: [{ scale: isPressed ? 0.98 : 1 }],
        minHeight: 80,
    };

  return (
    <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={cardStyle}
    >
        {headline && (
            <ThemedView style={[styles.DetailsHeadlineContainer, { backgroundColor: 'transparent' }]}>
            <ThemedView style={{
                ...styles.DetailsHeadlinesquare,
                borderColor: theme === 'dark' ? 'gray' : 'green',
                backgroundColor: 'transparent'
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

        {(body || briefText || fullText) && (
            <ThemedView style={{ backgroundColor: 'transparent' }}>
                <ThemedText 
                    type='default'
                    style={{
                        color: theme === 'dark' ? 'white' : 'black',
                        ...styles.DetailsBody
                    }}
                >
                    {body || (isExpanded ? fullText : briefText)}
                </ThemedText>
                
                {(briefText && fullText) && (
                    <ThemedView style={{ marginTop: 8, backgroundColor: 'transparent' }}>
                        {onContactClick && isExpanded && (
                            <ThemedView style={{ alignItems: 'center', backgroundColor: 'transparent', marginTop: 16, marginBottom: 12 }}>
                                <SayHiButton onPress={onContactClick} />
                            </ThemedView>
                        )}
                        
                        <Pressable
                            onPress={() => setIsExpanded(!isExpanded)}
                            style={{ alignSelf: 'flex-start' }}
                        >
                        <ThemedText 
                            type='link'
                            style={{
                                color: theme === 'dark' ? '#81b0ff' : '#16a34a',
                                fontSize: 14,
                                fontWeight: '600'
                            }}
                        >
                            {isExpanded ? 'Read less' : 'Read more'}
                        </ThemedText>
                        </Pressable>
                    </ThemedView>
                )}
            </ThemedView>
        )}
    </Pressable>
  )
}

export default Details