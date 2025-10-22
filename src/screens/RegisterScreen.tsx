import React, { useState } from 'react';
import { Stack, YStack, XStack, Text, Input, Button as TamaguiButton } from 'tamagui';
import { Button } from '../components/Button';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  return (
    <Stack flex={1} backgroundColor="$background" paddingHorizontal={24} justifyContent="center">
      <YStack space="$4" marginBottom="$8">
        <Text fontSize="$9" fontWeight="bold" color="$text">Criar conta</Text>
        <Text color="$textSecondary">Preencha os campos para se cadastrar</Text>
      </YStack>

      <YStack space="$4">
        <YStack space="$2">
          <Text>Nome completo</Text>
          <Input
            placeholder="Digite seu nome completo"
            value={name}
            onChangeText={setName}
          />
        </YStack>

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

        <YStack space="$2">
          <Text>Senha</Text>
          <Input
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </YStack>

        <YStack space="$2" marginBottom="$4">
          <Text>Confirmar senha</Text>
          <Input
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </YStack>

        <Button onPress={() => {}}>Cadastrar</Button>

        <XStack justifyContent="center" marginTop="$4">
          <Text>Já tem uma conta? </Text>
          <TamaguiButton
            unstyled
            onPress={() => navigation.navigate('Login')}
          >
            <Text color="$primary">Faça login</Text>
          </TamaguiButton>
        </XStack>
      </YStack>
    </Stack>
  );
};

export default RegisterScreen;
