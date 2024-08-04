// import { USER } from '../common/constants'
import {
  Message,
  ApiProviders,
  StreamBodyBase,
  StreamBodyOpenAI,
  // StreamOptionsOllama
} from '../common/types'

export function createStreamRequestBody(
  provider: string,
  options: {
    temperature: number
    numPredictChat: number
    model: string
    messages?: Message[]
    keepAlive?: string | number
  }
// ): StreamBodyBase | StreamOptionsOllama | StreamBodyOpenAI {
): StreamBodyBase | StreamBodyOpenAI {
  switch (provider) {
    // case ApiProviders.Ollama:
    // case ApiProviders.OpenWebUI:
    //   return {
    //     model: options.model,
    //     stream: true,
    //     messages: options.messages,
    //     keep_alive: options.keepAlive === '-1'
    //       ? -1
    //       : options.keepAlive,
    //     options: {
    //       temperature: options.temperature,
    //       num_predict: options.numPredictChat
    //     }
    //   }
    case ApiProviders.vLLM:
      return {
        model: options.model,
        stream: true,
        max_tokens: options.numPredictChat,
        messages: options.messages,
        temperature: options.temperature
      }
    default:
      return {
        model: options.model,
        stream: true,
        max_tokens: options.numPredictChat,
        messages: options.messages,
        temperature: options.temperature
      }
  }
}

export function createStreamRequestBodyFim(
  provider: string,
  prompt: string,
  options: {
    temperature: number
    numPredictFim: number
    model: string
    keepAlive?: string | number
  }
// ): StreamBodyBase | StreamOptionsOllama | StreamBodyOpenAI {
): StreamBodyBase | StreamBodyOpenAI {
  switch (provider) {
    // case ApiProviders.Ollama:
    // case ApiProviders.OpenWebUI:
    //   return {
    //     model: options.model,
    //     prompt,
    //     stream: true,
    //     keep_alive: options.keepAlive === '-1'
    //       ? -1
    //       : options.keepAlive,
    //     options: {
    //       temperature: options.temperature,
    //       num_predict: options.numPredictFim
    //     }
    //   }
    // case ApiProviders.LMStudio:
    //   return {
    //     model: options.model,
    //     prompt,
    //     stream: true,
    //     temperature: options.temperature,
    //     n_predict: options.numPredictFim
    //   }
    // case ApiProviders.LlamaCpp:
    // case ApiProviders.Oobabooga:
    //   return {
    //     prompt,
    //     stream: true,
    //     temperature: options.temperature,
    //     n_predict: options.numPredictFim
    //   }
    case ApiProviders.vLLM:
      return {
        prompt,
        model: options.model,
        stream: true,
        max_tokens: options.numPredictFim,
        temperature: options.temperature,
        n_predict: options.numPredictFim
      }
    default:
      return {
        prompt,
        stream: true,
        temperature: options.temperature,
        n_predict: options.numPredictFim
      }
  }
}
