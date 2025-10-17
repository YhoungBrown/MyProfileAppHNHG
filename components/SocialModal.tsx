import { Texts } from '@/constants/Texts';
import React from 'react';
import { Linking, Modal, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

interface SocialModalProps {
  visible: boolean;
  onClose: () => void;
  socialType: 'linkedin' | 'twitter' | 'email';
}

const SocialModal: React.FC<SocialModalProps> = ({ visible, onClose, socialType }) => {
  const { theme } = useThemeContext();
  const linkColor = theme === 'dark' ? '#81b0ff' : '#16a34a';

  const getSocialContent = () => {
    switch (socialType) {
      case 'linkedin':
        return {
          title: 'LinkedIn Profile',
          content: `Connect with me on LinkedIn to explore professional opportunities and network with fellow developers.\n\nMy LinkedIn profile showcases my professional journey, projects, and achievements in mobile app development and backend systems.\n\nFeel free to send me a connection request or message to discuss potential collaborations, job opportunities, or technical discussions.`,
          actionText: 'Open LinkedIn Profile',
          actionUrl: Texts.linkedinUrl,
        };
      case 'twitter':
        return {
          title: 'Twitter Profile',
          content: `Follow me on Twitter for tech insights, development tips, and updates on my latest projects.\n\nI share thoughts on React Native development, backend technologies, and the latest trends in mobile app development.\n\nLet's connect and share knowledge in the developer community!`,
          actionText: 'Open Twitter Profile',
          actionUrl: Texts.twitterUrl,
        };
      case 'email':
        return {
          title: 'Email Contact',
          content: `Get in touch with me directly via email for professional inquiries, project discussions, or collaboration opportunities.\n\nI'm always interested in hearing about new opportunities, interesting projects, or just having a chat about technology and development.\n\nI typically respond within 24 hours.`,
          actionText: 'Send Email',
          actionUrl: `mailto:${Texts.email}`,
        };
      default:
        return {
          title: 'Contact Information',
          content: 'Contact information not available.',
          actionText: 'Close',
          actionUrl: '',
        };
    }
  };

  const socialData = getSocialContent();

  const handleAction = async () => {
    if (socialData.actionUrl) {
      try {
        await Linking.openURL(socialData.actionUrl);
      } catch (error) {
        console.error('Error opening URL:', error);
      }
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <ThemedView style={[
          styles.modalContainer,
          {
            backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
            borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
          }
        ]}>
          <ThemedText type="title" style={[
            styles.modalTitle,
            { color: theme === 'dark' ? 'white' : 'black' }
          ]}>
            {socialData.title}
          </ThemedText>

          <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <ThemedText style={[
              styles.contentText,
              { color: theme === 'dark' ? 'white' : 'black' }
            ]}>
              {socialData.content}
            </ThemedText>
          </ScrollView>

          <ThemedView style={styles.buttonContainer}>
            <Pressable 
              style={[
                styles.actionButton,
                { 
                  backgroundColor: linkColor,
                  borderColor: linkColor,
                }
              ]} 
              onPress={handleAction}
            >
              <ThemedText style={styles.actionButtonText}>
                {socialData.actionText}
              </ThemedText>
            </Pressable>

            <Pressable style={styles.closeButton} onPress={onClose}>
              <ThemedText style={[
                styles.closeButtonText,
                { color: theme === 'dark' ? 'white' : 'black' }
              ]}>
                Close
              </ThemedText>
            </Pressable>
          </ThemedView>
        </ThemedView>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  modalContainer: {
    borderRadius: 16,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    minWidth: 280,
    maxHeight: '80%',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  modalTitle: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentContainer: {
    maxHeight: 300,
    marginBottom: 20,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    opacity: 0.9,
  },
  buttonContainer: {
    gap: 12,
  },
  actionButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  closeButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SocialModal;
