const { errorHandler } = require('../ErrorHandler');
// const { ValidationError, BusinessError, NotFoundError } = require('../errors');
jest.mock('../../errors', () => ({
  ValidationError: {
    is: () => true,
  },
}));

const res = { status: jest.fn().mockReturnValue({ json: jest.fn() }) };
const errorMessage = 'Something went wrong';
let error;

describe('HTTP / ErrorHandler', () => {
  describe('when is a validation error', () => {
    beforeEach(() => {
      console.log('Res status', res.status(200));

      error = {
        meta: {
          target: 'body',
          error: {
            details: [
              {
                message: errorMessage,
              },
            ],
          },
        },
      };
    });

    describe('when target is body', () => {
      it('responds with HTTP 422', () => {
        errorHandler(error, null, res);
        expect(res.status).toHaveBeenCalledWith(422);
      });

      it.todo('responds type is ValidationError');

      it.todo('responds with Validation Error message ');

      it.todo('responds with error details');
    });

    describe('when is a validation error', () => {
      it.todo('responds with HTTP 400');
      it.todo('responds type is BadRequest');
      it.todo('responds with Missing parameters message ');
      it.todo('responds with error details');
    });
  });

  describe('when is a business error', () => {
    it.todo('responds with HTTP 409');
    it.todo('responds type is BusinessError');
    it.todo('responds with Business Error message ');
    it.todo('responds with error details');
  });

  describe('when is a not found error', () => {
    it.todo('responds with HTTP 404');
    it.todo('responds type is NotFoundError');
    it.todo('responds with error message ');
  });

  describe('when is an internal error', () => {
    it.todo('responds with HTTP 500');
    it.todo('responds type is InternalError');
    it.todo('responds with error message ');
  });
});
