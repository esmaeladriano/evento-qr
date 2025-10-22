import React from 'react';
import { Image, ScrollView } from 'react-native';
import { Stack, YStack, XStack, Text, Button as TamaguiButton } from 'tamagui';
import { Button } from '../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type EventDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'EventDetail'>;

export function EventDetailScreen({ route, navigation }: EventDetailScreenProps) {
  const { event } = route.params || {
    id: '1',
    title: 'Conferência de Tecnologia',
    date: '15/10/2023',
    time: '09:00 - 18:00',
    location: 'Centro de Convenções',
    description: 'Uma conferência incrível sobre as últimas tendências em tecnologia e inovação. Palestrantes renomados e workshops práticos.',
    image: 'https://via.placeholder.com/400x200/4A90E2/FFFFFF?text=Conferencia+Tecnologia',
  };

  return (
    <Stack flex={1} backgroundColor="$background">
      <ScrollView>
        <Image 
          source={{ uri: event.image }} 
          style={{ width: '100%', height: 200 }} 
          resizeMode="cover"
        />
        
        <YStack padding={16} space="$4">
          <Text fontSize={24} fontWeight="bold">{event.title}</Text>
          
          <YStack space="$2">
            <XStack space="$2" alignItems="center">
              <Text>📅</Text>
              <Text>{event.date}</Text>
            </XStack>
            <XStack space="$2" alignItems="center">
              <Text>🕒</Text>
              <Text>{event.time}</Text>
            </XStack>
            <XStack space="$2" alignItems="center">
              <Text>📍</Text>
              <Text>{event.location}</Text>
            </XStack>
          </YStack>

          <YStack space="$2">
            <Text fontWeight="bold" fontSize={16}>Descrição</Text>
            <Text>{event.description}</Text>
          </YStack>

          <YStack space="$2">
            <Text fontWeight="bold" fontSize={16}>QR Code de Acesso</Text>
            <YStack alignItems="center" paddingVertical={16}>
              <Image 
                source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + event.id }} 
                style={{ width: 200, height: 200 }} 
              />
              <Text marginTop={8}>Mostre este QR Code na entrada do evento</Text>
            </YStack>
          </YStack>
        </YStack>
      </ScrollView>

      <Button 
        position="absolute" 
        bottom={24} 
        left={16}
        right={16}
        onPress={() => navigation.goBack()}
      >
        Voltar para a lista
      </Button>
    </Stack>
  );
}
