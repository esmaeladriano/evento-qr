import React, { useState } from 'react';
import { Stack, YStack, XStack, Text, Input, Button as TamaguiButton } from 'tamagui';
import { Button } from '../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Stack flex={1} backgroundColor="$background" paddingHorizontal={24} justifyContent="center">
      <YStack space="$4" marginBottom="$8">
        <Text fontSize="$9" fontWeight="bold" color="$text">Bem-vindo de volta</Text>
        <Text color="$textSecondary">Faça login na sua conta</Text>
      </YStack>

      <YStack space="$4">
        <YStack space="$2">
          <Text>E-mail</Text>
          <Input
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </YStack>

        <YStack space="$2" marginBottom="$4">
          <Text>Senha</Text>
          <Input
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </YStack>

        <Button onPress={() => {}}>Entrar</Button>

        <XStack justifyContent="center" marginTop="$4">
          <Text>Não tem uma conta? </Text>
          <TamaguiButton
            unstyled
            onPress={() => navigation.navigate('Register')}
          >
            <Text color="$primary">Cadastre-se</Text>
          </TamaguiButton>
        </XStack>
      </YStack>
    </Stack>
  );
}
