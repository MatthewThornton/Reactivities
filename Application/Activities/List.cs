using Domain;
using Microsoft.EntityFrameworkCore;
using MediatR;
using Persistence;
using Microsoft.Extensions.Logging;
using Application.Core;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<Result<List<Activity>>> { }

        public class Handler : IRequestHandler<Query, Result<List<Activity>>>
        {
            private readonly DataContext _context;
            private readonly ILogger<List> _logger;

            public Handler(DataContext context, ILogger<List> logger)
            {
                _logger = logger;
                _context = context;
            }

            public async Task<Result<List<Activity>>> Handle(Query request, CancellationToken cancellationToken)
            {
                try
                {
                    cancellationToken.ThrowIfCancellationRequested(); 
                }
                catch (System.Exception) 
                {
                    _logger.LogInformation("Task was cancelled");
                }

                return Result<List<Activity>>.Success(await _context.Activities.ToListAsync());
            }
        }
    }
}