import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { FirebaseService } from './firebase.service';

describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FirebaseService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValueOnce('pub-sub-1234')
              .mockReturnValueOnce("-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDJLDpcRHSqr/wQ\n6sy16argSU4Dzeu3ire7IZ0P/Oonl3LLchX3CkJB4oqE2FCeAZ/qaovtX6goz+ip\nmfgN/RD+c/EmYN+y1UWXgwVpqwPFlo+OQG6lRbzkrHcv0tMsX8fSbYX+CCN3cqsP\n6FhEeOWfDIApkIH5NZTiX5XRwWAcfhSzdNssmJuXWY2a6dcvD/gC6eXLjBMOdi2c\n13Mi9uQT9zqrI+/eFwFcER1ikFnlGG7zv8oflfUA+3sEDtep2LQFzDtgku323Y45\n7yyJlI8YTn+OYm1QhlQmy863nj9YgEXNLi5ybttkBMSdKSKNRbZgJVFpdXaveaDT\ns1l8tfB1AgMBAAECggEAEtGYWVlDW1RAeDSpbGWsyR5nteNlfDNLIgOa9baVu5kR\n8Vt9bTFV0WP9IUA7CmI3MMPsIwsiZ+71t303vyyVPQ22LqjmmYwUiSqF2cStraYl\nTQv/Tbv1rPk/4lwOdRrgo8arFNXIu5EhKh50uLML3T0GIDKXIKuVKeKsg9qwavnA\njcEkIRLPlC8EFsg1vLt41wX+pEop+2Fh5MJa6QGNc7XVQ/sgfJfxlvVW4T6SHaSs\nhXr2xSQoRRtE2BI7AwgWOdfDJQMtQ2kQgq9/YEdH28M+wxYdIjYUv4rKooFBlI/Y\nkzoL9yia30vK7qI5QC5MHxxeumMLW+j7if869Yj5YQKBgQDukjDQl96WdtdkHSRP\n1UjUHFr+m97uFkFfCFZ+HxNMjxrSCgLxEqlZ+APM4ZRjp4WZhuIHfLbdr1BM8OG+\nTKe+MVDIYwlSc3+on8KJyYoYX1B7nOH+cWoxwjuJgpIpCI/ntclav54waYDq2QoM\nqWFQgwsOzVI3ZX5Wjkp8tyeMwwKBgQDX3psm4ik79Fwt7Q5jLWiz/4zGBOIb8PBw\nV4cYZXhsbax8fF23/GfT+k/FXz1MB2UzNKeTpBXflwFJGwJu/02Ggg3H+dJWT4vV\nTKwo8IkQ7jNb+1Hg4hfyRr2AAMWKp9kaXzffyR4VqJ1651D585yeUQASOS6zBzYb\nfWpv5HWaZwKBgQDHMreho/0OA0LLa+3C3uKFgPuVdg6JG3oP4IVfn5DcruyFDijw\no1VWMtjxfDULlHff/hjCiaaiqVxSMhs7awPwsXqzJsZE2v1vjZ3AsNAmk4c+/3pP\nmuFBlN1jbuudaXHG1im/JRnvcFhdP0W91rvTnudfv55zdMItgXe+dKuIQwKBgASG\nmD4ic7bcEqqr06dkplNPwkXMiGkJjiDs1NpAFlw/mGQrv1NCKXMaRl3e90wGw6pl\nKjZANG0xn0dHF6/4DkoJo/xTUoOYu1fHebyJ/nWqaM0+4aKTWukrboGmgn27syOI\nZ4V7k/PkSxjujJYQ83GmRRgctsvuFMZSxM5/va91AoGBAIdOfmgaoRxsuR8CgxnN\nGAPuVRLWYVmoy27WMsUfqXwWqRXT6XILkkPk2k8stOT97IYAFEz6En8mySAxulQj\nlgIAkH6oprTNLsSF9bdFCdHpkEyKnUgXTYw95fBRR0tvBmaZNuHEcfyzWYy/R0gW\nat2fhIOog+h1Plo7AQJFFwE5\n-----END PRIVATE KEY-----\n")
              .mockReturnValueOnce('firebase-adminsdk-ukc23@pub-sub-1234.iam.gserviceaccount.com')
              .mockReturnValueOnce('https://pub-sub-1234.firebaseio.com/'),
          },
        },
      ],
    }).compile();

    service = module.get<FirebaseService>(FirebaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
