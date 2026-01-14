//TODO: 다음 타입과 클래스들을 구현하세요

interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
}

abstract class PaymentProcessor {
  //TODO: 추상 클래스 구현
  protected abstract providerName: string;

  protected validate(amount: number, currency: string): PaymentResult | null {
    if (!Number.isFinite(amount) || amount <= 0) {
      return { success: false, error: "Invalid amount" };
    }
    if (!currency || currency.trim().length === 0) {
      return { success: false, error: "Invalid currency" };
    }
    return null;
  }

  protected generateTransactionId(): string {
    return `${this.providerName}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  protected abstract execute(amount: number, currency: string): Promise<PaymentResult>;

  async process(amount: number, currency: string): Promise<PaymentResult> {
    const validationError = this.validate(amount, currency);
    if (validationError) return validationError;
    return this.execute(amount, currency);
  }
}

class CreditCardProcessor extends PaymentProcessor {
  //TODO
  protected providerName = "credit";

  protected async execute(amount: number, currency: string): Promise<PaymentResult> {
    return {
      success: true,
      transactionId: this.generateTransactionId(),
    };
  }
}

class PayPalProcessor extends PaymentProcessor {
  //TODO
  protected providerName = "paypal";

  protected async execute(amount: number, currency: string): Promise<PaymentResult> {
    return {
      success: true,
      transactionId: this.generateTransactionId(),
    };
  }
}

class CryptoProcessor extends PaymentProcessor {
  //TODO
  protected providerName = "crypto";

  protected async execute(amount: number, currency: string): Promise<PaymentResult> {
    return {
      success: true,
      transactionId: this.generateTransactionId(),
    };
  }
}

// 팩토리
class PaymentFactory {
  static create(type: "credit" | "paypal" | "crypto"): PaymentProcessor {
    //TODO
    switch (type) {
      case "credit":
        return new CreditCardProcessor();
      case "paypal":
        return new PayPalProcessor();
      case "crypto":
        return new CryptoProcessor();
    }
  }
}

// 테스트
(async () => {
  const creditProcessor = PaymentFactory.create("credit");
  const result = await creditProcessor.process(100, "USD");
  console.log(result);
})();
