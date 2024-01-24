using Application.Core;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>> 
        {
            public Activity Activity { get; set; }
        }  

        public class CommandValidator : AbstractValidator<Command>
        {
          public CommandValidator()
          {
            RuleFor(x => x.Activity).SetValidator(new ActivityValidator());
          }
        }

        public class Handler: IRequestHandler<Command, Result<Unit>>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;

            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.Activity);

                // Number of entries saved to the database. If it's greater than 0, then it was successful.
                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to create activity");

                // This does nothing. It just tells NUnit that the function is returning something.
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}