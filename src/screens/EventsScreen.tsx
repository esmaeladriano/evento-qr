import React from 'react';
import { FlatList, Image, TouchableOpacity, ListRenderItem } from 'react-native';
import { Stack, YStack, XStack, Text, Button as TamaguiButton } from 'tamagui';
import { Button } from '../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, EventItem } from '../navigation/AppNavigator';
import type { CompositeScreenProps } from '@react-navigation/native';

type EventsScreenProps = NativeStackScreenProps<RootStackParamList, 'Events'>;

const events: EventItem[] = [
  {
    id: '1',
    title: 'Conferência de Tecnologia',
    date: '15/10/2023',
    time: '09:00 - 18:00',
    location: 'Centro de Convenções',
    image: 'https://via.placeholder.com/300x150/4A90E2/FFFFFF?text=Conferencia+Tecnologia',
  },
  {
    id: '2',
    title: 'Workshop de Programação',
    date: '20/10/2023',
    time: '14:00 - 17:00',
    location: 'Sala de Treinamento',
    image: 'https://via.placeholder.com/300x150/4A90E2/FFFFFF?text=Workshop+Programa%C3%A7%C3%A3o',
  },
  // Add more events as needed
];

const EventsScreen: React.FC<EventsScreenProps> = ({ navigation }) => {
  const renderEventItem: ListRenderItem<EventItem> = ({ item }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('EventDetail', { event: item })}
      activeOpacity={0.8}
    >
      <Stack 
        backgroundColor="$cardBackground" 
        borderRadius={12} 
        marginBottom={16}
        overflow="hidden"
      >
        <Image 
          source={{ uri: item.image }} 
          style={{ width: '100%', height: 150 }} 
          resizeMode="cover"
        />
        <YStack padding={16} space="$2">
          <Text fontSize={18} fontWeight="bold">{item.title}</Text>
          <XStack alignItems="center" space="$2">
            <Text>📅 {item.date}</Text>
            <Text>⏰ {item.time}</Text>
          </XStack>
          <Text>📍 {item.location}</Text>
        </YStack>
      </Stack>
    </TouchableOpacity>
  );

  return (
    <Stack flex={1} backgroundColor="$background" padding={16}>
      <YStack space="$4" marginBottom={24}>
        <Text fontSize={24} fontWeight="bold">Eventos</Text>
        <Text color="$textSecondary">Confira os próximos eventos</Text>
      </YStack>

      <FlatList
        data={events}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />

      <Button 
        position="absolute" 
        bottom={24} 
        right={24}
        onPress={() => navigation.navigate('CreateEvent')}
      >
        +
      </Button>
    </Stack>
  );
};

export default EventsScreen;
